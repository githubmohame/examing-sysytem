class Question():
    pass
    def __init__(self):
        pass
        self.question ="";
        self.choice =[];
        self.answer="";
        self.code="";
    def __repr__(self) -> str:
        return str({"question":self.question, "choice":self.choice,"answer":self.answer,"code":self.code})
    def to_map(self):
        return {"question":self.question, "choice":self.choice,"answer":self.answer,"code":self.code};