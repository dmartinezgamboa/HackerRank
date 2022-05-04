def climbingLeaderboard(ranked, player):

    rankings = []
    for player_score in player:
        rank = 1
        for ranked_score in ranked:
            if player_score > ranked_score:
                rankings.append(rank)
                rank += 1
                break
            if player_score < ranked_score:
                rank += 1
            if player_score == ranked_score:
                rankings.append(rank)

    return rankings
