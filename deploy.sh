rm -rf build && yarn build && \
cd build && git init && git add . \
&& git commit -m "Initial commit" && \
git remote add origin git@github.com:Ntarasiuk/cbc-equipping-classes.git && \
git push --force origin master:gh-pages