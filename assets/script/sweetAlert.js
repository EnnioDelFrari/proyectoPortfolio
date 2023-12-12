Swal.fire({
    title: '<span class="tituloAlert">¡Bienvenido a mi Portfolio!</span>',
    text: 'Selecciona tu país',
    icon: 'question',
    confirmButtonText: 'Seleccionar',
    padding: '1rem',
    backdrop: 'true',
    position: 'center',
    allowOutsideClick: 'true',
    allowEscapeKey: 'false',
    allowEnterKey: 'false',
    stopKeydownPropagation: 'false',
    input: 'select',
    inputPlaceholder: 'Pais',
    inputValue: '',
    inputOptions: {
        argentina: 'Argentina',
        bolivia: 'Bolivia',
        brasil: 'Brasil',
        chile: 'Chile',
        mexico: 'Mexico',
        paraguay: 'Paraguay',
        peru: 'Perú',
        uruguay: 'Uruguay',
        
        
        
    }
})