/*
Copyright (c) 2003-2009, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

CKEDITOR.editorConfig = function( config )
{
	
/***** Skins *****/
config.skin = 'office2003'; // Default
//config.skin = 'kama';
//config.skin = 'v2';
	
/***** Elements *****/
config.format_tags = 'p;h1;h2;h3;h4;h5;h6';

/***** Toolbar *****/
config.toolbar = 'Default';

config.toolbar_Default =
[
    ['Source'],
    ['Cut','Copy','Paste','PasteText','PasteFromWord','-','SpellChecker', 'Scayt'],
    ['Undo','Redo','-','Find','Replace','-','SelectAll','RemoveFormat'],
    ['Maximize', 'ShowBlocks'],
	'/',
	['Bold','Italic','Underline','Strike'],
	['Subscript','Superscript'],
    ['JustifyLeft','JustifyCenter','JustifyRight'],
    ['NumberedList','BulletedList','-','Image','Table','HorizontalRule','SpecialChar'],
    ['Link','Unlink','Anchor'],
    '/',
    ['Format'],
    ['TextColor','BGColor']
];

config.toolbar_Full =
[
    ['Source','-','Save','NewPage','Preview','-','Templates'],
    ['Cut','Copy','Paste','PasteText','PasteFromWord','-','Print', 'SpellChecker', 'Scayt'],
    ['Undo','Redo','-','Find','Replace','-','SelectAll','RemoveFormat'],
    ['Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton', 'HiddenField'],
    '/',
    ['Bold','Italic','Underline','Strike','-','Subscript','Superscript'],
    ['NumberedList','BulletedList','-','Outdent','Indent','Blockquote'],
    ['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'],
    ['Link','Unlink','Anchor'],
    ['Image','Flash','Table','HorizontalRule','Smiley','SpecialChar','PageBreak'],
    '/',
    ['Styles','Format','Font','FontSize'],
    ['TextColor','BGColor'],
    ['Maximize', 'ShowBlocks','-','About']
];

config.toolbar_Basic =
[
    ['Bold', 'Italic', '-', 'NumberedList', 'BulletedList', '-', 'Link', 'Unlink','-','About']
];

}