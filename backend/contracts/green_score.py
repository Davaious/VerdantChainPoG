from pyteal import *

def green_score():
    # Cálculo de puntuaciones basado en eficiencia energética
    return Approve()

if __name__ == "__main__":
    print(compileTeal(green_score(), mode=Mode.Application, version=6))