import { IQuestionPick, IDataStore} from '../App/App';
export default class QuestionPick implements IQuestionPick{

    wordsArray: Array<string>; 
    public constructor() { this.wordsArray == null;}

    private prepare(dataStore: IDataStore):void {
        var temp1: string[] = []; // 1-3 arası
        var temp2: string[] = []; // 4-6 arası
        var temp3: string[] = []; // 7-9 arası
        for ( var i = 1; i < dataStore.getSize(); i++ ) {
            var objString = dataStore.lookup(dataStore.lookupInt(i));
            var obj = JSON.parse(objString);
            if ( obj.weight >= 1 && obj.weight <= 3 )
                temp1.push(JSON.stringify(obj));
            if ( obj.weight >= 4 && obj.weight <= 6 )
                temp2.push(JSON.stringify(obj));
            if ( obj.weight >= 7 && obj.weight <= 9 )
                temp3.push(JSON.stringify(obj));
        }
        var temp: string[] = [];
    
        while(  temp1.length > 0 || temp2.length > 0 || temp3.length > 0 ) {
            if(  temp3 != null &&  temp3.length != null &&  temp3.length > 0) {
                var tmp = temp3.pop();
                temp.push(tmp);
            }
            if(  temp2 != null &&  temp2.length != null &&  temp2.length > 0) {
                var tmp = temp2.pop();
                temp.push(tmp);
            }
            if(  temp1 != null &&  temp1.length != null &&  temp1.length > 0) {
                var tmp = temp1.pop();
                temp.push(tmp);
            }    
        }
        this.wordsArray = temp;
    }

    getQuestion(dataStore: IDataStore):string {

        if(  this.wordsArray == null || this.wordsArray.length == null || this.wordsArray.length <= 0 )
            this.prepare(dataStore);

        if(  this.wordsArray == null || this.wordsArray.length == null || this.wordsArray.length <= 0 )
            return "finished!";
        var str = this.wordsArray.pop();
        var obj = JSON.parse( str );
        var word = obj.word;
        if ( word == "undefined" )
            return "undefined";
        else
            return word;
    }
}   

