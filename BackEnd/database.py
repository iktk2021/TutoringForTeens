from github import Github

g=Github("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")
print(g.get_user().get_repos())
repo=g.get_user().get_repo("TutoringForTeen")
def new_user(username):
    file=repo.get_contents("members.txt")
    members=repo.get_contents("members.txt").decoded_content.decode()
    repo.update_file("members.txt","New User",f"{members} \n {username}",file.sha)

def get_users():
    file=repo.get_contents("members.txt")
    members=repo.get_contents("members.txt").decoded_content.decode()

    return members
new_user(" a:x:d:g ")