class HelloWorldButton {
    buttonCssClass = 'hello-world-button'; //nije suportanou svim browserima
    render() {
        const button = document.createElement('button');
        button.innerHTML = "Hello World";
        const body = document.querySelector('body');
        button.classList.add(this.buttonCssClass);
        button.onclick = function() {
            const p = document.createElement('p');
            p.innerHTML = 'Hello World';
            p.classList.add('hello-world-text');
            body.appendChild(p);
        };
        body.appendChild(button)
    };
};

export default HelloWorldButton;