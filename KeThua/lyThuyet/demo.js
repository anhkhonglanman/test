class Fish {
    constructor (habitat, length) {
        this.habitat = habitat
        this.length = length
    }
    renderProperties(element) {
        element.innerHTML = JSON.stringify(this)
    }
}
class Trout extends Fish {
    constructor(habitat, length, variety) {
        super(habitat, length);
        this.variety = variety;
    }
    renderPropertiesWithSuper(element){
        element.className = "green"
        super.renderProperties(element)
    }
}