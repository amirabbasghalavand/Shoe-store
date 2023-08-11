class ProductHandler {
    static dataList = new Array();

    static addData(product) {
        this.dataList.push(product);
    }


    static setData(list) {
        for (let data of list) {
            this.dataList.push(data);
        }
    }

    static getData() {
        return this.dataList;
    }


    static getDataById(id) {
        return this.dataList.find((value) => value.id == id);
    }

    static createData() {
        let list = new Array();
        for (let index = 1; index <= 15; index++) {
            let product = new Product(index, "Fresh fowm X 860v" + index, this.getRandom(129, 480), "Man's Running", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, ipsam! Qui minus alias delectus corporis repellat sapiente quod, earum doloremque libero quasi, tenetur aperiam nisi facere expedita illo harum dolorum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum magni amet deleniti accusantium a quo, dolorum inventore cumque sint placeat culpa facilis animi odit numquam accusamus tempore reiciendis suscipit laborum ab assumenda praesentium error nam qui? Quidem at quis ea nihil fugit quaerat quasi aperiam dolores id rem, labore necessitatibus quibusdam exercitationem ipsa molestias ab error? Cupiditate dolores ab ea? Reprehenderit earum voluptatum voluptate fuga porro optio aliquid consequuntur? Dolorum repellendus commodi excepturi quos earum at fuga eligendi sapiente assumenda, autem iure adipisci rerum consequuntur animi repudiandae, repellat rem qui? Velit quod quas autem dicta odit ex porro. Fugiat, asperiores possimus harum sed magni, in at animi necessitatibus iste atque, cum deleniti illum reiciendis saepe neque iusto soluta blanditiis culpa?", "src/images/shoes" + index + ".jpeg");
            list.push(product);
        }
        return list;
    }

    static getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

}