function customRender(reactElement,main_container){

    // const domElement=document.createElement(reactElement.type)
    // domElement.innerHTML=reactElement.children
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)

    // main_container.appendChild(domElement);

    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    for (const prop in reactElement.props) {
       domElement.setAttribute(prop,reactElement.props[prop])
    }

    main_container.appendChild(domElement);

}

const reactElement={
    type: 'a',
    props: {
        href: 'https://google.com',
        target:'_blank'
    },
    children: 'Click me to visit Google'
}


const main_container=document.getElementById('root')

customRender(reactElement,main_container)
