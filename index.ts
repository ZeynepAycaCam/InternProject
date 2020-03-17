import App from './App/App';
import DataStore from './DataStore/DataStore';
import Speech from './Speech/Speech';
import TextToSpeech from './TextToSpeech/TextToSpeech';
import Comparator from './Comparator/Comparator';
import QuestionPick from './QuestionPick/QuestionPick';

var entry = document.getElementById('app');

if (entry == null) throw 'Entry not found';

var dataStore = new DataStore(localStorage);

var speechRec = new Speech();

var speechSyn = new TextToSpeech();

var comparator = new Comparator();

var questionPick = new QuestionPick();

var app = new App(entry, dataStore, speechRec, speechSyn, comparator, questionPick);

app.render();
