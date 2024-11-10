import http from "@/http-commons";

export const GradeManagmentService = {

    /**
     * Lista los estados de aprobación de notas de los catedráticos
     * @param {*} parcial_id Ocupa el id del parcial para poder acceder a la información
     * @returns Promise que debe de ser accedido con el .data
     */
    getTeacherList(parcial_id){
        return http.get(`/schedule/parcial/${parcial_id}`);
    }

    
}


