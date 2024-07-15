// YAHA HAMM HAMARI CUSTOM KHUDSE 'REACT' bana rhe hai


function customRender(reactElement , maincontainer){
    
    /* YE TOO THA 1st METHOD (ABB isse acha likhenge)
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href' , reactElement.props.href);
    domElement.setAttribute('target' , reactElement.props.target);
    mainContainer.appendChild(domElement);
    */

    // Method 2
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;

    for (const prop in reactElement.props) {
       if(prop === 'children') continue;  // pehle likhte the isko too safety point ke liye abb lagao na lagao koi fark nahi padta hai. coz pehel hamm 'children' ko props ke andar likhte the islie ye check lagate the but abhi too ham children ko props ke bahar hee likhte hai (niche dekhlo) but fiir bhi only for SAFETY purpose hamne ye 'if' condition lagayi hai.
       domElement.setAttribute(prop , reactElement.props[prop]);
    }
    
    mainContainer.appendChild(domElement);



}


const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}


const mainContainer = document.querySelector('#root');

customRender(reactElement , mainContainer);