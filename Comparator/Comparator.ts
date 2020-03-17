import { IComparator } from '../App/App';

export default class Comparator implements IComparator {
    
    public constructor(){}
    
    compare(arr1: Array<string>, arr2:  Array<string>):any{

        for (var i = 0; i < arr1.length; i++) {
            arr1[i] = arr1[i].toLowerCase();
        }
        for (var i = 0; i < arr2.length; i++) {
            arr2[i] = arr2[i].toLowerCase();
        }

        var stringAnswer = arr1.toString();
        stringAnswer = stringAnswer.replace(/,/g,''); 
        var flag = false;
        for (var i = 0; i < arr2.length; i++) {
            var str = arr2[i].replace(/\s/g,''); 
            if ( stringAnswer.indexOf(str) > -1 )
                flag = true;
        }
        return flag;

    }  
 
}



