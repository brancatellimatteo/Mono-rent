export class Monop{
  QRcode: string;
  dataOraPrelievo: Date;
  dataOraRilascio: Date;
  latitudine:string;
  longitudine:string;
  statoCorrente: string;

  constructor(QRcode: string, dataOraPrelievo: Date, dataOraRilascio: Date, latitudine: string, longitudine: string, statoCorrente:string){
    this.QRcode=QRcode;
    this.dataOraPrelievo=dataOraPrelievo;
    this.dataOraRilascio=dataOraRilascio;
    this.latitudine=latitudine;
    this.longitudine=longitudine;
    this.statoCorrente=statoCorrente;
  }
}
