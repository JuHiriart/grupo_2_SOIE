module.exports = {
    port:process.env.PORT || 2000,
    callback: function(){
        console.log('Server is running on', 'http://localhost:' + this.port)
    }
}