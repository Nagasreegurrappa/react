function Button(){
    const styles = {
        backgroundColor: "hsl(200, 100%, 50%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        cursor: "pointer",
        border: "none",
    }

    return(
        <button style={styles}>Submit</button>
    )
}

export default Button;