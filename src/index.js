
let editor = new FroalaEditor("#example", 
{ 
    height: 640,
    imageDefaultWidth: 380,
    key: "TEB9iE6C5D3A3H3H3B8aB-16maoqwkknhA-13D-11G5hcj1rA1C7A6B5E1D4A3E1A9D7==",
    imageUploadRemoteUrls: false,
    fontFamilyDefaultSelection : "Verdana",
    fontSizeDefaultSelection : "14",
    fontSize: ["8", "9", "10", "11", "12", "14","16", "17", "18","20","24", "30", "36", "48", "60", "72", "96"],
    lineHeights:{
        Default: '1.5',
        Single: '1',
        '1.15': '1.15',
        '1.5': '1.5',
        Double: '2'
      },
    toolbarButtons: {
        moreText: {
            buttons:[
                "fontFamily", "fontSize", "textColor",  "bold", "underline",  "italic", "strikeThrough", "subscript", "superscript", "backgroundColor", "inlineClass", "inlineStyle", "clearFormatting"
            ],
            buttonsVisible: 4
        },
        moreParagraph:{
            buttons:["alignLeft", "alignCenter","formatUL", "outdent", "indent", "formatOLSimple", "alignRight", "alignJustify", "formatOL", "paragraphFormat", "paragraphStyle", "lineHeight", "quote"],
        buttonsVisible: 5
        },
        moreRich:{
            buttons:["insertLink", "insertImage", "insertHR", "insertVideo", "insertTable", "emoticons", "fontAwesome", "specialCharacters", "embedly", "insertFile"],
            buttonsVisible: 3
        },
        moreMisc:{
            buttons:["undo", "redo", "fullscreen", "html","print", "getPDF", "spellChecker", "selectAll", "html", "help"]
        },
        align: "right",
        buttonsVisible: 4 
    },
colorsText:["#2738E1", "#F90909", "#61BD6D", "#1ABC9C", "#54ACD2", "#2C82C9", "#9365B8", "#475577", "#CCCCCC",   "#41A85F", "#00A885", "#3D8EB9", "#2969B0", "#553982", "#28324E", "#000000",   "#F7DA64", "#FBA026", "#EB6B56", "#E25041", "#A38F84", "#EFEFEF", "#FFFFFF",   "#FAC51C", "#F37934", "#D14841", "#B8312F", "#7C706B", "#D1D5D8", "REMOVE" ],
fontFamily: {
    "Arial":'Arial',
    "Georgia":'Georgia',
    "Impact":'Impact',
    "Tahoma":'Tahoma',
    "Times New Roman":'Times New Roman',
    "Verdana":'Verdana',
    "Roboto,sans-serif": 'Roboto',
    "Oswald,sans-serif": 'Oswald',
    "Montserrat,sans-serif": 'Montserrat',
    "'Open Sans Condensed',sans-serif": 'Open Sans Condensed'
}}
);


window.submitFormFroala = function() {
    const data = editor.html.get();
    FileMaker.PerformScriptWithOption(
    "Store Data from Web Form", data, "0"
    );
    };
    
    
    
window.setFormFroala = function (paramData) {
    const data = paramData;
    editor.html.set(data);
    };
    
    
FroalaEditor.DefineIcon('insertHTML', { NAME: 'plus', SVG_KEY: 'add' });
FroalaEditor.RegisterCommand('insertHTML', {
title: 'Insert HTML',
focus: true,
undo: true,
refreshAfterCallback: true,
callback: function (data) {
        this.html.insert(data);
        this.undo.saveStep();
}
    });


