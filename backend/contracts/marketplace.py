from pyteal import *

def marketplace():
    # Lógica para listar y transferir activos
    return Approve()

if __name__ == "__main__":
    print(compileTeal(marketplace(), mode=Mode.Application, version=6))