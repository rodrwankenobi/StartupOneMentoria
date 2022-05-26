import './styles/Form.css'

function Form(){
    return (
    <main>
        <div class="form">
            <div class="controle">
                <div class="label">
                    <label for="cargo_atual">Cargo Atual:</label>
                </div>
                <div class="input-form">
                    <select name="cargo_atual">
                        <option value="0">Engenheiro de Dados</option>
                        <option value="1">Cientista de Dados</option>
                    </select>
                </div>
            </div>
            <div class="controle">
                <div class="label">
                    <label for="objetivo">Objetivo:</label>
                </div>
                <div class="input-form">
                    <select name="objetivo">
                        <option value="0">Engenheiro de Dados</option>
                        <option value="1">Cientista de Dados</option>
                    </select>
                </div>
            </div>
            <div class="controle">
                <div class="label">
                    <label for="nivel_atual">Nível Atual:</label>
                </div>
                <div class="input-form">
                    <select name="nivel_atual">
                        <option value="0">Júnior</option>
                        <option value="1">Pleno</option>
                        <option value="2">Sênior</option>
                    </select>
                </div>
            </div>
            <div class="controle">
                <div class="label">
                    <label for="nivel_desejado">Nível Desejado:</label>
                </div>
                <div class="input-form">
                    <select name="nivel_atual">
                        <option value="0">Júnior</option>
                        <option value="1">Pleno</option>
                        <option value="2">Sênior</option>
                    </select>
                </div>
            </div>
            <div class="controle">
                <div class="label">
                    <label for="salario_atual">Salário Atual:</label>
                </div>
                <div class="input-form">
                    <input type="number"/>
                </div>
            </div>
            <div class="controle">
                <div class="label">
                    <label for="selario_desejado">Salário Desejado:</label>
                </div>
                <div class="input-form">
                    <input type="number"/>
                </div>
            </div>
        </div>
        <section class="submit">
                <div>
                    <label for="prazo">Prazo:</label>
                </div>
                <div>
                    <input type="date" name="prazo"/>
                </div>
                <button>Gerar Trilha</button>
        </section>
    </main>
    )

}

export default Form;