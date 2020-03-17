
export default class App {
  public constructor(
    private appElement: HTMLElement,
    private dataStore: IDataStore,
    private speechRecognation: ISpeech,
    private speechSyn: ITextToSpeech,
    private comparator: IComparator,
    private questionPick: IQuestionPick
  ) { }

  private save(): void {
    this.appElement.querySelector('#save').addEventListener('click', e => {
      
      var emptyArray: string[] = [];
      var data = { word: (this.appElement.querySelector('#word') as HTMLInputElement).value,
                   meanings: (this.appElement.querySelector('#meanings') as HTMLInputElement).value.split(','),
                   userAnswer: emptyArray,
                   weight: 5
                 };
      this.dataStore.addNewWord(
        (this.appElement.querySelector('#word') as HTMLInputElement).value,
        JSON.stringify(data) 
      );    
    });
  }

  private lookup(): void {
    this.appElement.querySelector('#lookup').addEventListener('click', e => {

      var stringfyObj = this.dataStore.lookup(
          (this.appElement.querySelector('#word') as HTMLInputElement).value);
      var object1 = JSON.parse( stringfyObj );
      (this.appElement.querySelector(
        '#meanings'
      ) as HTMLInputElement).value = object1.meanings.join(',');

    });
  }

  private startRecording(): void {
    this.appElement.querySelector('#recordStart').addEventListener('click', e => {
      this.speechRecognation.startRecord();
    });
  }

  private stopRecording(): void {
    this.appElement.querySelector('#recordStop').addEventListener('click', async e => {
      var message = await this.speechRecognation.stopRecordAsync();
      (this.appElement.querySelector(
        '#text'
      ) as HTMLInputElement).value = message;
    });
  }

  private sayMessage(): void {
    this.appElement.querySelector('#speak').addEventListener('click', e => {
      var message = (this.appElement.querySelector('#word') as HTMLInputElement).value;
      this.speechSyn.speak(message);
    });
  }

  private checkAnswer():void {
    this.appElement.querySelector('#check').addEventListener('click', e => {
      var str1 = (this.appElement.querySelector('#text') as HTMLInputElement).value;
      var asnwerjSON = this.dataStore.lookup(
        (this.appElement.querySelector('#questionArea') as HTMLInputElement).value
      );
      var str2 = JSON.parse(asnwerjSON);

      var answers = str1.split(' ');
      var resultBool = this.comparator.compare( answers , str2.meanings );   
      var resultString;
      if ( resultBool )
        resultString = "doğru";
      else
        resultString = "yanlış";
      (this.appElement.querySelector(
        '#result'
       ) as HTMLInputElement).value = resultString;
       
       var tmpstr = this.dataStore.lookup(  
        (this.appElement.querySelector('#questionArea') as HTMLInputElement).value
      );
       var object3 = JSON.parse(tmpstr );
       var tempArray = object3.userAnswer;
       tempArray.push(resultString);

       var objectWeight = object3.weight;
       if ( resultBool )
        objectWeight--;
      else
      {
        if ( objectWeight <= 9 )
        objectWeight++;
      }
        
      
       object3.weight = objectWeight;
       object3.userAnswer = tempArray;
       var stringf = JSON.stringify(object3);
       this.dataStore.addNewWord(
        (this.appElement.querySelector('#questionArea') as HTMLInputElement).value,stringf );
    });
  }

  private getQuestion():void{
    var question = this.questionPick.getQuestion(this.dataStore);
         (this.appElement.querySelector(
          '#questionArea'
         ) as HTMLInputElement).value = question;
    this.appElement.querySelector('#question').addEventListener('click', e => {
          var question = this.questionPick.getQuestion(this.dataStore);
          (this.appElement.querySelector(
           '#questionArea'
          ) as HTMLInputElement).value = question;

          (this.appElement.querySelector(
            '#test'
           ) as HTMLInputElement).value = '';

           (this.appElement.querySelector(
            '#result'
           ) as HTMLInputElement).value = '';

     });
  }

  private getUserAnswers():void{
    this.appElement.querySelector('#getUserAnswers').addEventListener('click', e => {

      var stringfyObj4 = this.dataStore.lookup(
        (this.appElement.querySelector('#questionArea') as HTMLInputElement).value);
      var object4 = JSON.parse ( stringfyObj4 );

      (this.appElement.querySelector(
        '#userHistory'
      ) as HTMLInputElement).value = object4.userAnswer.toString();
    });
    
  }

  public render(): void {
    this.appElement.innerHTML = `
      <h1>Test App!!!</h1>
      <input id="word" />
      <input id="meanings" />
      <button id="save">Save</button>
      <button id="lookup">Lookup</button>
      <button id="speak">Speak</button>
      <hr/>
      <input id="questionArea" />
      <input id="text" />
      <input id="result" />
      <input id="userHistory" />
      <button id="recordStart">Start Recording</button>
      <button id="recordStop">Stop Recording</button>
      <button id="check">Check Answer</button>
      <button id="question">Get Question</button>
      <button id="getUserAnswers">Get User Answers</button>
    `;

    this.save();
    this.lookup();
    this.startRecording();
    this.stopRecording();
    this.sayMessage();
    this.checkAnswer();
    this.getQuestion();
    this.getUserAnswers();
  }
}

export interface IDataStore {
  addNewWord(word: string, mean: string): void;
  lookup(word: string): string;
  lookupInt(index: number): string;
  getSize(): number;
}

export interface ISpeech {
  startRecord():void;
  stopRecordAsync();
}

export interface ITextToSpeech {
  speak(message: string):void;
}

export interface IComparator {
  compare(userAnswer:  Array<string>, trueAnswer:  Array<string>):any;
}

export interface IQuestionPick {
  getQuestion(dataStore: IDataStore):string;
}