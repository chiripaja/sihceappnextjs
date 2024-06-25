
import Swal from 'sweetalert2';

const SweetAlertService = {
  showAlert: (message: string, type: 'success' | 'error' | 'warning' | 'info' = 'success') => {
    return Swal.fire({
      icon: type,
      text: message,
    });
  },

  showConfirmation: (message: string) => {
    return Swal.fire({
      icon: 'question',
      text: message,
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
    });
  },

  showError: (message: string) => {
    return Swal.fire({
      icon: 'error',
      html: message,
    });
  },
};

export default SweetAlertService;