function Contact(props){

    const {page} = props
 if (page !== "contact"){
    return null
 }

    return(
        <div>
            <h1>Feel free to reach us at +254 #########</h1>
        </div>
    )
}
export default Contact