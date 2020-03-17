import { ITextToSpeech} from '../App/App';

export interface IWindow extends Window{
    SpeechSynthesisUtterance: any;
    //SpeechSynthesis: any;
}

export default class TextToSpeech implements ITextToSpeech{
    speech: any;
    //talk: any;
    public constructor() {
        const {SpeechSynthesisUtterance}: IWindow = <IWindow>window;
        this.speech = new SpeechSynthesisUtterance();
        //const {SpeechSynthesis}: IWindow = <IWindow>window;
        //this.talk = new SpeechSynthesis();
        //document.write("asdads");
    }

    speak(message:string):void {
        
        //document.write("asdads");
        this.speech.text = message;
        this.speech.volume = 1;
        this.speech.rate = 1;
        this.speech.pitch = 1;
        //this.speech.lang = 'en-US';
        //(window as any).talk.speak(this.speech);
        (<any>window).speechSynthesis.speak(this.speech);
    }

}
