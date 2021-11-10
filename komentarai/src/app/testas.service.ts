import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";

export class TestasService{
    paspaudimas=new EventEmitter<string>();
    paspaudimas2=new Subject<string>();
}






