import Konva from 'konva';

class Board {
    // private stage:Konva.Stage;
    // constructor() {
    //     this.stage = new Konva.Stage({
    //         container: 'container',
    //         width: 100,
    //         height: 100,
    // });
    // }

    public getWebViewContent() {
        // console.log("Board.ts.getWebViewContent.1: getWebView triggered");
        return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Test Panel</title>
        </head>
        <body>
            <div> hi <div>
        </body>
        </html>`;
    }
}

export default Board;