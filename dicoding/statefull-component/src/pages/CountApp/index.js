import React from 'react';

// state secara hanya bisa digunakan untuk component berupa class. sedangkan untuk component fungsi bisa dengan react hooks

class CountApp extends React.Component {
    constructor(props) {
        super(props);

        // inisialisasi state count
        this.state = {
            count: 0
        };

        /*
        binding event handler dikarenakan dalam fungsi ini akan dipanggil oleh button yang akan terender sebagai html. 
        sehingga, this adalah milik 'window' bukan milik class ini
        */
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
        this.reset = this.reset.bind(this);
    }

    increase() {
        // mengubah state dengan function dan mereturn objek
        this.setState((state) => {
            return {
                count: state.count + 1
            };
        });
    }

    decrease() {
        // mengubah state langsung dengan objek
        this.setState(
            {
                count: this.state.count-1
            }
        )
    }

    reset() {
        this.setState(
            {
                count: 0
            }
        )
    }

    render() {
        if (this.state.count%5 === 0 && this.state.count%7 === 0) {
            var count_display = 'FizzBuzz';
        } else if (this.state.count%5 === 0) {
            var count_display = 'Fizz';
        } else if (this.state.count%7 === 0) {
            var count_display = 'Buzz';
        } else {
            var count_display = this.state.count
        };

        return (
            <div>
                <button onClick={this.increase}>+ increase</button>
                <button onClick={this.decrease}>- decrease</button>
                <p>{count_display}</p>
                <button onClick={this.reset}>reset</button>
            </div>
        )
    }
};

export default CountApp

