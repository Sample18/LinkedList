// My new Data Structure
// Linked List [value, next] -> [value, next]

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    // добавление эл. в начало
    append(data) {
        const node = {data, next: null}

        if (this.tail) {
            this.tail.next = node
        }

        if (!this.head) {
            this.head = node
        }

        this.tail = node
    }

    // добавление эл. в конец
    prepend(data) {
        const node = {data, next: this.head}

        this.head = node

        if (!this.tail) {
            this.tail = node
        }
    }

    // превращение в массив
    toArray() {
        const output = []
        let current = this.head

        while (current) {
            output.push(current)
            current = current.next
        }
        return output
    }

    // поиск элемента
    find(data) {
        if (!this.head) {
            return
        }

        let current = this.head
        while (current) {
            if (current.data === data) {
                return current
            }
            current = current.next
        }
    }

    // добавление эл. в любое место
    insertAfter(after, data) {
        const found = this.find(after)

        if (!found) {
            return
        }

        found.next = {data, next: found.next}
    }

    // удаление элемента
    remove(data) {
        if (!this.head) {
            return
        }

        // удаление из начала
        while (this.head && this.head.data === data) {
            this.head = this.head.next
        }

        // удаление из середины
        let current = this.head
        while (current.next) {
            if (current.next.data === data) {
                current.next = current.next.next
            }
            else {
                current = current.next
            }
        }

        // удаление из конца
        if (this.tail.data === data) {
            this.tail = current
        }
    }
}

const list = new LinkedList()