export function MoodBoardItem ({color, image, description}){
  
  return (
    
    <div className="mood-board-item" style={{backgroundColor:color}}>
    <img className="mood-board-image" src={image}/>
    <h3 className="mood-board-text">{description}</h3>
    </div>
  )

}

export function MoodBoard(){
  return (
    <div className="mood-board">
    <h1 className="mood-board-heading">Destination Mood Board</h1>
    <MoodBoardItem 
    color="pink"
    image="https://imgs.search.brave.com/qglifzwEzdodOuwS676l0IZjK18ObaLDfvsMCBG5m_U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS1jZG4udHJpcGFk/dmlzb3IuY29tL21l/ZGlhL3Bob3RvLW8v/MDEvMDkvNjkvN2Yv/ZHVycmluZy1oYWpq/LTE5LTEyLTIwMDcu/anBn"
    description="Mecca"/>
     <MoodBoardItem 
    color="lightblue"
    image="https://imgs.search.brave.com/AOr6lWz6YzzVjAKQv-2fty7i6UmdHXtDMRcQdp0_Ogk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTAv/Mjc0LzM2OC9zbWFs/bC9tYXNqaWQtYWwt/aGFyYW0tYWwtbWFz/amlkLWFuLW5hYmF3/aS1tZWRpbmEtc2F1/ZGktYXJhYmlhLXBo/b3RvLmpwZw"
    description="Medina"/>
    <MoodBoardItem 
    color="lightgreen"
    image="https://imgs.search.brave.com/OOESvx7FUcPqBKVUQw1tTsbxR_gl3BsYv2mwbIVCdwo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjI0/MTEyNDUwMi9waG90/by90b3BzaG90LW11/c2xpbS13b3JzaGlw/cGVycy13YWxrLW5l/eHQtdG8tdGhlLWRv/bWUtb2YtdGhlLXJv/Y2stbW9zcXVlLWF0/LXRoZS1hbC1hcXNh/LW1vc3F1ZS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9dWQ0/S1ljT3dIWE1sWEtS/R0JMUk8yOWtZSVZZ/dWo1YXVpeGJPYzZF/cmZCZz0"
    description="Jerusalem"/>
    <MoodBoardItem 
    color="purple"
    image="https://imgs.search.brave.com/1ZmPAN92PscIx43-fe-8F6yRPzzacG95ZpIzn3btRyc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzIv/MDc5Lzk0MS9zbWFs/bC9hZXJpYWwtdmll/dy1vZi1iYW5kYXJh/eWEta3VjaGluZy1t/b3NxdWUtaW4ta3Vj/aGluZy1zYXJhd2Fr/LWVhc3QtbWFsYXlz/aWEtcGhvdG8uanBn"
    description="Malaysia"/>
    </div>
    
  )
}