import Card from "./Card.vue"
import { mount } from "@vue/test-utils"

describe('Card.vue', () =>{
    test('learning', () => {
        expect(true).toBe(true)
    })
})

/* Para fazer test em JS faça:

npm install --save--dev jest  # Modulo de teste do javaScript
npm install --save--dev vue-jest babel-jest    # Fazem uma transformação em arquivos para serem importados no projeto

configure no package.json:
"jest": {
    "transform": {
        "^.+\\.vue$": "vue-jest",
        "^.+\\.js$": "babel-jest"
    }
}
*/