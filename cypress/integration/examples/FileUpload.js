/// <reference types="Cypress" />

import 'cypress-file-upload';

describe('File Uploads', () => {

    it('Single File Upload', () => {
        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('#file-upload').attachFile('UploadFile1.txt', { allowEmpty: true });
        cy.get('#file-submit').click();
        cy.wait(5000);
        cy.get('div.example h3').should('have.text', 'File Uploaded!');
    })

    it('File Upload - Rename', () => {
        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('#file-upload').attachFile({ allowEmpty: true, filePath: 'UploadFile1.txt', fileName: 'Myfile.txt' });
        cy.get('#file-submit').click();
        cy.wait(5000);
        cy.get('div.example h3').should('have.text', 'File Uploaded!');
    })

    it('Drag & Drop', () => {
        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('#drag-drop-upload').attachFile( 'UploadFile1.txt' ,{ subjectType: 'drag-n-drop' });
        cy.get('#drag-drop-upload .dz-filename span').should('contain.text','UploadFile1.txt');
    })

    it('Multiple Files Upload', () => {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php');
        cy.get('#filesToUpload').attachFile( ['UploadFile1.txt' ,'UploadFile2.txt']);
        cy.wait(5000);
        cy.get(':nth-child(6) > strong').should('contain.text','Files You Selected:');
    })

    it.only('File Upload inside Shadow DOM', () => {
        cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm');
        cy.get('.smart-browse-input', {includeShadowDom:true}).attachFile('UploadFile1.txt');
        cy.wait(5000);
        cy.get('.smart-item-name', {includeShadowDom:true}).should('contain.text','UploadFile1.txt');
    })

})

