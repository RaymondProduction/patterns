export default class ServerDocumentFactory{
    static get PdfDocument(){
        return 0;
    }

    static get DocDocument(){
        return 1;
    }

    static get RtfDocument(){
        return 2;
    }

    getDocument(label: number){
        switch(label) {
            case ServerDocumentFactory.RtfDocument:
                    return new ServerDocumentRtf();
            case ServerDocumentFactory.DocDocument:
                return new ServerDocumentDoc();
            case ServerDocumentFactory.PdfDocument:
                return new ServerDocumentPdf();
            default:
                throw new Error('Document isn\'t recognized');
        }
    }
}
class ServerDocument {
    type: string;
    constructor(type: string) {
        this.type = type 
    }

    public createDocument() {
        console.log('Create,',this.type,' document. Server realization');
    }
}

class ServerDocumentRtf extends ServerDocument{
    constructor(){
        super('Rtf');
    }
}

class ServerDocumentDoc extends ServerDocument{
    constructor(){
        super('Doc');
    }
}

class ServerDocumentPdf extends ServerDocument{
    constructor(){
        super('Pdf');
    }
}