import { Component, OnInit } from '@angular/core';
import FactoryOfFactories from './abstract_factory/factoryOfFactories';
import ServerDocumentFactory from './abstract_factory/server-document-factory';
import {CloudDocumentFactory, CloudDocument }from './abstract_factory/cloud-document-factory';

import {EventBuilder} from "./builder/event-builder";
import {EventCreator} from "./builder/event-creator";
import {IssueProvider} from "./builder/issue-provider";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'patterns';
  opened: boolean = true;

  ngOnInit():void {
    // const serverFactory = <ServerDocumentFactory> FactoryOfFactories.getFactory(
    //   FactoryOfFactories.SERVER
    // )
    // const pdfDocument: CloudDocument = serverFactory.getDocument(CloudDocumentFactory.PDF);
    // pdfDocument.createDocument();

    // const pdfDocument =  serverFactory.getDocument(
    //   ServerDocumentFactory.PdfDocument
    // );
   // const serverDocumentFactory: CloudDocumentFactory = new CloudDocumentFactory();

   const eventCreator: EventBuilder = new EventCreator();
   const event: string = IssueProvider.createEvent(eventCreator);
   console.log(event);
  }
}


