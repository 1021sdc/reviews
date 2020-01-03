import http from "k6/http";

export default function() {
    for (let i=9000000; i <9001000; i++) {
        http.get(`http://localhost:3004/?id=${i}`);
    }
};