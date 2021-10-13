export default function sessionInterceptor(response: Response) {
  if (response.status === 401) {
    //    toast.warn("Sessão expirada");
    // destruir sessão do usuario
    return;
  }
}
