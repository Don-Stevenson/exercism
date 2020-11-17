
# Raindrops
# check if a given number is divisable by 3, 5, 7 and return Pling, Plang or Plong
# if number is not divisable by 3, 5, or 7, return the number
# *******************************************************************************

def convert(number):
    pling = ""
    plang = ""
    plong = ""

    if number % 3 != 0 and number % 5 != 0 and number % 7 != 0:
        return str(number)

    if number % 3 == 0:
        pling = 'Pling'
    if number % 5 == 0:
        plang = 'Plang'
    if number % 7 == 0:
        plong = 'Plong'

    return pling+plang+plong
