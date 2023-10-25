/*Rifare l'esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no
MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato 
viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.*/

const { createApp } = Vue;
createApp({
    data(){
         return{
            activelement: 0,
            newTask: "",
            error: false,
            toDo: [
                    {
                        text: "chiamare il veterinario",
                        done: true,
                    },
                    {
                        text: "portare fuori Lilly",
                        done: true,
                    }, 
                    {
                        text: "chiamare mamma",
                        done: true,
                    }, 
                    {
                        text: "fare la spesa",
                        done: false,
                    }, 
                    {   text: "prenotare viaggio",
                        done: false,
                    }
                ]
         }
    },
//- come prima cosa aggiungo il click al bottone nell'html
    methods : {
        removeTask(index){
          this.toDo.splice(index, 1);
        },
//- successivamente dichiaro la funzione che mi servirà per inserire il nuovo item
        AddTask(){
            if (this.newTask !== "" && this.newTask.length >= 5) {
                const newItem = { //- daggiungere una costante riassegnando un nuovo valore alla proprietà del mio oggetto 
                    text : this.newTask,
                    done : false
                }
                this.toDo.unshift(newItem);
                this.newTask = "";
                this.error = false;
            }
            else{
                this.error = true;
            }
        },

         checkUncheck(checkIndex){
            if (this.toDo[checkIndex].done === false) {
                this.toDo[checkIndex].done = true;
            }
            else{
                this.toDo[checkIndex].done = false;
            }
         }
    },

}).mount("#app")
