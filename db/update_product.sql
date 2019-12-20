update shelfie
set name = $1, price = $2, img = $3
where id = $4
returning *;