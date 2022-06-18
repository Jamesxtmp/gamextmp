export const setCssVar = ( name, value ) => {
    if( name && value ){
        const styleSheetToSetVars = document.styleSheets[0].cssRules[0]
        styleSheetToSetVars.styleMap.set( name, value )
        console.log( 'AddCssVar', name, value )
    }
}