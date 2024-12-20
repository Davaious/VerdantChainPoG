from pyteal import *

def verdan_token():
    return Approve()

if __name__ == "__main__":
    print(compileTeal(verdan_token(), mode=Mode.Application, version=6))