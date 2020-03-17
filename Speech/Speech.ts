import { ISpeech } from '../App/App';

export interface IWindow extends Window{
    webkitSpeechRecognition: any;
 }

 export default class Speech implements ISpeech{
        recognition: any;
        public constructor(){
            const {webkitSpeechRecognition}: IWindow = <IWindow>window;
            this.recognition = new webkitSpeechRecognition();
            this.recognition.continuous = true; 
            //this.recognition.lang = 'en-US';
        }
            
        startRecord(): void{
            this.recognition.start();
                
        }   
            
        stopRecordAsync(){
            var promise = new Promise<string>(resolve => {
                this.recognition.stop();
                this.recognition.onresult = function(event) {
                     var message = event.results[0][0].transcript;
                     resolve(message);
                };
            })
            return promise;
        } 

        /*stopRecord(callback: (event:any)=>void): any{
            this.recognition.stop();
            this.recognition.onresult =  callback;
            
            // function(event) {
            //     var message = event.results[0][0].transcript;
            //     return message;
            // };
        }*/
        
 }