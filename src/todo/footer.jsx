import '../assets/styles/footer.styl'

export default {
    data() {
        return {
            author: 'LuJiao'
        }
    },
    render() {
        return (
            <div id="footer">
                <span>Written By {this.author}</span>
            </div>
        )
    }
}