export class CloudDocumentFactory{
    public static PDF = 0;
    public static DOC = 1;
    public static RTF = 2;

    getDocument(label: number){
        switch(label) {
            case CloudDocumentFactory.RTF:
                return new CloudDocumentRtf();
            case CloudDocumentFactory.DOC:
                return new CloudDocumentDoc();
            case CloudDocumentFactory.PDF:
                return new CloudDocumentPdf();
            default:
                throw new Error('Document isn\'t recognized');
        }
    }
}

export class CloudDocument {
    type: string;
    constructor(type: string) {
        this.type = type 
    }

    public createDocument() {
        console.log('Create,',this.type,' document');
    }
}

class CloudDocumentRtf extends CloudDocument{
    constructor(){
        super('Rtf');
    }
}

class CloudDocumentDoc extends CloudDocument{
    constructor(){
        super('Doc');
    }
}


class CloudDocumentPdf extends CloudDocument{
    constructor(){
        super('Pdf');
    }
}



