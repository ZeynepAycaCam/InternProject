import { IDataStore } from '../App/App';

export default class DataStore implements IDataStore {
  public constructor(private storage: Storage) {}

  addNewWord(word: string, meanings: string): void {
    this.storage.setItem(word, meanings);
  }
  lookup(word: string): string {
    var row = this.storage.getItem(word);
    if (!row) throw 'Word not fould!';
    return row;
  }
  lookupInt(index: number): string {
    var row = this.storage.key(index);
    if (!row) throw 'Word not fould!';
    return row;
  }
  getSize(): number{
    return this.storage.length;
  }

}
