package main

import (
"fmt"
"net/http"
"log"
)

func helloHandler(w http.ResponseWriter, r *http.Request) {
w.Header().Set("Access-Control-Allow-Origin", "*") 
w.Write([]byte("msg received to the go backend\r\n"))
fmt.Println("received req from client")
}

func helloHandlerPost(w http.ResponseWriter, r *http.Request) {
w.Write([]byte("msmg.received\r\n"))
fmt.Println("received POSTS req from client")
}

func main() {
fmt.Println("Hello, Server!")
fmt.Println("test commit")

mux := http.NewServeMux()
hf := http.HandlerFunc(helloHandler)
hfp := http.HandlerFunc(helloHandlerPost)
mux.Handle("GET /", hf)
mux.Handle("POST /", hfp)

server := http.Server{Addr: ":8080", Handler: mux}
nerr := server.ListenAndServe()
if nerr != nil {
	log.Fatalf("Server failed to start: %v", nerr)
}
}
