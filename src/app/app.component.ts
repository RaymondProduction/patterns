import { Component, OnInit } from '@angular/core';
import FactoryOfFactories from './abstract_factory/factoryOfFactories';
import ServerDocumentFactory from './abstract_factory/server-document-factory';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'patterns';
  opened: boolean = true;

  ngOnInit():void {
    const serverFactory = <ServerDocumentFactory> FactoryOfFactories.getFactory(
      FactoryOfFactories.SERVER
    )
    const pdfDocument = serverFactory.getDocument(
      ServerDocumentFactory.PdfDocument
    );
    pdfDocument.createDocument();
  }
}
