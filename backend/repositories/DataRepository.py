from .Database import Database


class DataRepository:
    @staticmethod
    def json_or_formdata(request):
        if request.content_type == 'application/json':
            gegevens = request.get_json()
        else:
            gegevens = request.form.to_dict()
        return gegevens

    #########  treinen  #########
    @staticmethod
    def read_treinen():
        pass

     #########  bestemmingen  #########

    @staticmethod
    def read_bestemmingen():
        pass
