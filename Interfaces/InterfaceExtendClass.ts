/**
 * Created by ganesh on 24/3/17.
 */

class Control{
    private state:any;
}

interface SelectableControl extends Control{
    select():void;
}