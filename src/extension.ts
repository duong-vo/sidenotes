// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import Board from './whiteboard/board';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "sidenotes" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    const disposable = vscode.commands.registerCommand('sidenotes.helloWorld', () => {
        // The code you place here will be executed every time your command is executed
        // Display a message box to the user
        vscode.window.showInformationMessage('Hello World from sidenotes!');
        
    });

    const testPanel = vscode.commands.registerCommand('sidenotes.testPanel', testPanelCallback);
    
    
    context.subscriptions.push(disposable);
}

function testPanelCallback(): void {
    const panel = vscode.window.createWebviewPanel(
        'testPanel',
        'Test Panel',
        vscode.ViewColumn.One,
        {}
      );
    const b:Board = new Board();
    panel.webview.html = b.getWebViewContent();
}


// This method is called when your extension is deactivated
export function deactivate() {}
