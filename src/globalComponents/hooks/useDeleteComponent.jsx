import React from "react";

const useDeleteComponent = () => {

    const deleteComponent = (arr, set, index) => {
        let copy = Object.assign([], arr);
        console.log(copy)
        // copy.splice(index, 1);
        // set(copy);
    }

    return {deleteComponent};
};

export default useDeleteComponent;