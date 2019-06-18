export default class ServerDocumentFactory{
    public static PDF = 0;
    public static DOC = 1;
    public static RTF = 2;


    getDocument(label: number){
        switch(label) {
            case ServerDocumentFactory.RTF:
                    return new ServerDocumentRtf();
            case ServerDocumentFactory.DOC:
                return new ServerDocumentDoc();
            case ServerDocumentFactory.PDF:
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