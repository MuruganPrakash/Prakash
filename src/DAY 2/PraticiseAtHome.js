function MyForm(){
    return(
        <div>
            <label >Name</label>
            <input type='text'/>
            <br/>
            <label>Email</label>
            <input type='email'/>
            <br/>
            {/* <p>Message</p> */}
            <label>
                Message
                <textarea rows={2} cols={30}/>
            </label>
            <br/>
            <button type='submit'>Submit</button>
        </div>

    );
}
export default MyForm;